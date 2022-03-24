/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 * gridview/index.tsx
 * gridview example
 * hooks :
 *
 * last modify : jh.jeong
 ******************************************************************************/

/* tslint:disable */
import { useSelector, useDispatch } from "react-redux"; // redux
import React, { useState, useEffect, useRef, useCallback } from "react"; // default hooks
import { useLocations, useWindowDimensions } from "hooks"; // locations hooks
import styled from "styled-components";
import {
    Grid,
    GridColumn as Column,
    GridCell,
    GridSelectionChangeEvent,
    GridDetailRow,
    GridDetailRowProps,
    GridToolbar,
    GridDataStateChangeEvent,
    GridExpandChangeEvent,
    GridRowProps,
    GridColumnMenuProps,
    GridColumnMenuFilter,
    GridColumnMenuCheckboxFilter,
    GridColumnMenuCheckboxFilterProps,
    GridColumnMenuFilterUI,
} from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { DataResult, process, State } from "@progress/kendo-data-query";

export type gridViewChildrenType = {
    [key: string]: {
        field: string; // ex ) filed.children_filed_name
        title: string; // ex ) children_filed_name
        headerClassName?: string; // ex ) same class_name other headerClass
        className?: string; // ex ) same class_name other headerClass
    }[];
};

export type gridViewProps = {
    keys: string[];
    titles: string[];
    values: object[];
    keysWidth?: number[] | string[];
    keysWidthTotal?: number;
    datatype?: number[];
    //tool btn props
    addIcon?: string;
    isEdit?: boolean;
    editIcon?: string;
    isDel?: boolean;
    delIcon?: string;
    // change event
    onClickAdd?: () => void;
    onClickEdit?: (no?: number) => void;
    onClickDel?: (no?: number) => void;
    onClickRow?: (idx: number, selectedRow?: any) => void;
    onContextMenu?: (event : any, idx: number, selectedRow?: any) => void;
    //style
    headerClass?: string;
    rowClass?: string;
    rowColors?: any[];
    headerStyle?: any;
    rowStyle?: any;
    gridStyle?: any;
    //get select row
    getCustomEl?: (idx: number, dataIdx?: number) => any;
    //custom list
    //full data for multi column
    gridChildren?: gridViewChildrenType;
    //custom grid params
    fullData?: any[];
    sortable?: boolean;
    filterable?: boolean;
    groupable?: boolean;
    reorderable?: boolean;
    pageable?: boolean;
    sort?: { field: string; dir: string }[];
    group?: { field: string }[];
    //
    excelFilename?: string;
};
interface FinalgridViewProps extends gridViewProps {}

function isStringArray(value: any): value is number[] {
    if (value instanceof Array) {
        value.forEach(function (item) {
            // maybe only check first value?
            if (typeof item !== "number") {
                return false;
            }
            return true;
        });
        return true;
    }
    return false;
}

export const GridViewComponent: React.FunctionComponent<FinalgridViewProps> = (
    props
) => {
    const DEFAULT_HEADER_WIDTH = 60;
    const { width } = useWindowDimensions();
    const [parentWidth, setParentWidth] = useState<number>();
    const [keysWidth, setKeysWidth] = useState<string[]>([]);

    const [cellEnabled, setCellEnabled] = useState<boolean>(false);
    const [dragEnabled, setDragEnabled] = useState<boolean>(false);
    const [headerClass, setHeaderClass] = useState<string>("");
    const [headerType, setHeaderType] = useState<number[]>([]);

    const _grid = React.useRef<any>();
    const _export = React.useRef<ExcelExport | null>(null);

    const [dataState, setDataState] = useState<State>({
        skip: 0,
        take: 20,
        sort: [{ field: "orderDate", dir: "desc" }],
        group: [{ field: "customerID" }],
    });

    const [dataResult, setDataResult] = useState<DataResult>();

    useEffect(() => {
        setHeaderClass(`${props.headerClass}`);
    }, [props.headerClass]);

    useEffect(() => {
        if (props.datatype) setHeaderType([...props.datatype]);
    }, [props.datatype]);

    useEffect(() => {
        if (props.fullData) {
            let _dataState = {
                skip: 0,
                take: props.pageable ? 20 : 0,
            };

            if (props.sort) {
                Object.assign(_dataState, { sort: [...props.sort] });
            }
            if (props.group) {
                Object.assign(_dataState, { group: [...props.group] });
            }
            setDataState(_dataState);
            setDataResult(process(props.fullData, _dataState));
            setHeaderSize();
        }
    }, [props.fullData]);

    useEffect(() => {
        if (props.keysWidth && props.keysWidth.length > 0) {
            setHeaderSize();
        }
    }, [props.keysWidth, width]);

    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save(dataResult?.data, _grid.current.columns);
        }
    };

    const setHeaderSize = () => {
        let list: string[] = [];
        let keysWidth = props.keysWidth;
        if (isStringArray(keysWidth)) {
            let total = 0;
            keysWidth.map((raw: number, idx) => (total += raw));
            for (var w of keysWidth) {
                let calc =
                    (width /
                        (props.keysWidthTotal ? props.keysWidthTotal : 10)) *
                    w;
                let result = calc;
                list.push(`${result}px`);
            }
        }
        setKeysWidth([...list]);
        // if (isStringArray(keysWidth)) {
        //     setKeysWidth([...keysWidth.map((raw)=>raw.toString())])
        // }
    };

    const CustomCell = (e?: any) => {
        let _item: any;
        if (e) _item = e.dataItem;
        return (
            <CustomBtnWrap className={props.rowClass}>
                {props.isEdit && (
                    <CustomBtn
                        onClick={() => {
                            return props.onClickEdit
                                ? props.onClickEdit(_item)
                                : null;
                        }}
                        src={props.editIcon}
                    />
                )}
                {props.isDel && (
                    <CustomBtn
                        onClick={() => {
                            return props.onClickDel
                                ? props.onClickDel(_item)
                                : null;
                        }}
                        src={props.delIcon}
                    />
                )}
            </CustomBtnWrap>
        );
    };

    const onSelectionModeChange = (event: GridSelectionChangeEvent) => {
        if (props.onClickRow) {
            props.onClickRow(
                event.endRowIndex,
                event.dataItems && event.dataItems[event.endRowIndex]
                    ? event.dataItems[event.endRowIndex]
                    : undefined
            );
        }
    };

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        if (props.fullData) {
            setDataResult(process(props.fullData, event.dataState));
            setDataState(event.dataState);
        }
    };

    const expandChange = (event: GridExpandChangeEvent) => {
        const isExpanded =
            event.dataItem.expanded === undefined
                ? event.dataItem.aggregates
                : event.dataItem.expanded;
        event.dataItem.expanded = !isExpanded;
        if (dataResult) setDataResult({ ...dataResult });
    };

    const rowRender = (
        trElement: React.ReactElement<HTMLTableRowElement>,
        gridProps: GridRowProps
    ) => {
        const defaultColor = { backgroundColor: "white" };
        const trProps: any = {
            style:
                props.rowColors && props.rowColors[gridProps.dataIndex]
                    ? props.rowColors[gridProps.dataIndex]
                    : defaultColor,
            onContextMenu: (e : any)=>props.onContextMenu ? props.onContextMenu(e, gridProps.dataIndex) : null,
        };
        return React.cloneElement(
            trElement,
            { ...trProps },
            trElement.props.children
        );
    };

    const ColumnMenu = (props: GridColumnMenuProps) => {
        return (
            <div>
                <GridColumnMenuFilter
                    {...props}
                    expanded={true}
                    hideSecondFilter={true}
                />
            </div>
        );
    };

    return (
        <ExcelExport ref={_export} fileName={props.excelFilename}>
            <button
                id="excel_export"
                style={{ display: "none" }}
                onClick={excelExport}
            >
                Export to Excel
            </button>
            <GridContainer
                // data={[...props.values]}
                data={dataResult}
                // @ts-ignore: Unreachable code error
                ref={_grid}
                sortable={props.sortable}
                filterable={props.filterable}
                groupable={props.groupable}
                reorderable={props.reorderable}
                pageable={
                    props.pageable ? { buttonCount: 4, pageSizes: true } : false
                }
                {...dataState}
                onDataStateChange={dataStateChange}
                onExpandChange={expandChange}
                resizable
                selectable={{
                    enabled: true,
                    cell: cellEnabled,
                    drag: dragEnabled,
                }}
                onSelectionChange={onSelectionModeChange}
                rowRender={rowRender}
                style={props.gridStyle}
            >
                {props.keys.map((raw, idx) => {
                    if (props.getCustomEl && props.getCustomEl(idx) != null) {
                        return (
                            <Column
                                key={idx}
                                headerClassName={headerClass}
                                className={props.rowClass}
                                field={raw}
                                title={props.titles[idx]}
                                filterable={false}
                                width={
                                    keysWidth && keysWidth[idx]
                                        ? keysWidth[idx]
                                        : undefined
                                }
                                // minResizableWidth={64}
                                cell={(e) =>
                                    props.getCustomEl
                                        ? props.getCustomEl(idx, e.dataIndex)
                                        : true
                                }
                            />
                        );
                    }
                    let rclassname = props.rowClass;
                    let filter: any = undefined;
                    if (headerType.length > 0) {
                        switch (headerType[idx]) {
                            case 0:
                                rclassname += " align-left";
                                filter = "text";
                                break;
                            case 1:
                                rclassname += " align-center";
                                filter = "numeric";
                                break;
                            case 2:
                                rclassname += " align-right";
                                filter = "numeric";
                                break;
                            default:
                                rclassname += " align-center";
                                filter = "text";
                        }
                    }

                    let child = undefined;
                    if (
                        props.gridChildren &&
                        Object.keys(props.gridChildren).indexOf(raw) != -1
                    ) {
                        for (var _child of props.gridChildren[raw]) {
                            Object.assign(_child, {
                                className: rclassname,
                                width: keysWidth[idx]
                                    ? parseInt(keysWidth[idx]) /
                                      props.gridChildren[raw].length
                                    : 0,
                            });
                        }
                        child = props.gridChildren[raw];
                    }

                    return (
                        <Column
                            key={idx}
                            headerClassName={headerClass}
                            className={rclassname}
                            field={raw}
                            title={props.titles[idx]}
                            filter={filter}
                            columnMenu={ColumnMenu}
                            width={
                                keysWidth && keysWidth[idx]
                                    ? keysWidth[idx]
                                    : undefined
                            }
                            // minResizableWidth={64}
                            children={child}
                        />
                    );
                })}
            </GridContainer>
        </ExcelExport>
    );
};

const GridContainer = styled(Grid)`
    width: 100%;
    height: 100%;
    border-color: transparent;
    border-radius: 0 0 10px 10px;
`;

const AddBtn = styled.div`
    cursor: pointer;
`;

const CustomBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const DefaultCell = styled.div``;

const CustomBtn = styled.img`
    cursor: pointer;
    margin-right: 6px;
    width: 29px;
`;

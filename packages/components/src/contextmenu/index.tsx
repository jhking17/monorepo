/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 * contextmenu/index.tsx
 * hooks :
 * useLocations
 *
 * last modify : jooho2479@gmail.com
 ******************************************************************************/
// Library
import React, { useRef, useState, useEffect } from "react"; // default hooks
import {
    Menu,
    Item,
    Separator,
    Submenu,
    useContextMenu,
    ItemParams,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
//
// Module
import * as S from "./styled";

export type contextMenuProps = {
    menu_id: string;
    items : string[];
    onClickItem : any[],
    is_always?: boolean;
};
interface FinalContextMenuProps extends contextMenuProps {}

export const ContextMenuComp = (
    props: FinalContextMenuProps
): { contextMenuElement: any; onContextMenu: any } => {
    const { show } = useContextMenu({
        id: props.menu_id,
    });

    useEffect(() => {
        if (props.is_always) {
            document.addEventListener("contextmenu", (event) => {
                event.preventDefault();
                handleContextMenu(event);
            });

            () =>
                document.removeEventListener("contextmenu", (event) => {
                    event.preventDefault();
                    handleContextMenu(event);
                });
        }
    }, []);

    const handleContextMenu = (event: any) => {
        event.preventDefault();
        show(event, {
            props: {
                key: "value",
            },
        });
    };
    const handleItemClick = (args?: ItemParams<any, any>) => {
        if (args) {
            console.log(args.data, args.props, args.event);
        }
    };
    return {
        contextMenuElement : (
            <S.Block>
                <Menu id={props.menu_id}>
                    {props.items.map((raw, idx)=>{
                        return(
                            <>
                            <Item key={idx} onClick={handleItemClick}>{raw}</Item>
                            <Separator />
                            </>
                        );
                    })}
                    {/* <Submenu label="Foobar">
                        <Item onClick={handleItemClick}>Sub Item 1</Item>
                        <Item onClick={handleItemClick}>Sub Item 2</Item>
                    </Submenu> */}
                </Menu>
            </S.Block>
        ),
        onContextMenu: handleContextMenu,
    };
};

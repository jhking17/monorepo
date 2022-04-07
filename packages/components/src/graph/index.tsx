/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 * graph/index.tsx
 * hooks :
 * useLocations
 *
 * last modify :
 ******************************************************************************/

import { useSelector, useDispatch } from "react-redux"; // redux
import React, { useState, useEffect } from "react"; // default hooks
import { useLocations } from "hooks"; // locations hooks
import styled from "styled-components";
import { Line, Bar, Doughnut, Pie, Radar } from "react-chartjs-2";

export type graphProps = {
    type: string;
    data: any;
    chartOptions?: any;
    style?: object;
    height?: number;
    width?: number;
};
interface FinalgraphProps extends graphProps {}

type styledProps = {
    $rotate?: number;
};

export const GraphComponent: React.FunctionComponent<FinalgraphProps> = (
    props: FinalgraphProps
) => {
    const { back, existBack, path } = useLocations();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getChartComp = () => {
        let _data = props.data;
        switch (props.type) {
            case "doughnut":
                return (
                    <Doughnut
                        width={props.width}
                        height={props.height}
                        data={_data}
                        options={props.chartOptions}
                    />
                );

            case "pie":
                return (
                    <Pie
                        width={props.width}
                        height={props.height}
                        data={_data}
                        options={props.chartOptions}
                    />
                );

            case "bar":
                return (
                    <Bar
                        width={props.width}
                        height={props.height}
                        data={_data}
                        options={props.chartOptions}
                    />
                );

            case "radar":
                return (
                    <Radar
                        width={props.width}
                        height={props.height}
                        data={_data}
                        options={props.chartOptions}
                    />
                );

            case "line":
                return (
                    <Line
                        data={_data}
                        options={props.chartOptions}
                        width={props.width}
                        height={props.height}
                    />
                );
            default:
                return (
                    <Line
                        data={_data}
                        options={props.chartOptions}
                        width={props.width}
                        height={props.height}
                    />
                );
        }
    };

    return (
        <ChartWrapperDiv style={props.style}>
            {props.data && getChartComp()}
        </ChartWrapperDiv>
    );
};

const ChartWrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

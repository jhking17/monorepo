import { ListItemSecondaryAction } from "@mui/material";
import React, { ReactNode } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

interface ListCompTypes {
    items: any[];
    loadMore: (startIndex: number, stopIndex: number) => void | Promise<void>;
    hasNextPage: boolean;
    itemSize: number;
    width : number;
    height : number;
}

export const ListComponent: React.FunctionComponent<ListCompTypes> = ({ items, loadMore, hasNextPage, itemSize, width, height }) => {
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    const Row = ({ index, style, data }: ListChildComponentProps) => {
        console.log(index, style, data);
        return <div style={style}>{items[index]}</div>;
    };

    return (
        <InfiniteLoader
            isItemLoaded={(index: number) => {
                return index < items.length;
            }}
            itemCount={itemCount}
            loadMoreItems={loadMore}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    className="List"
                    height={height}
                    width={width}
                    itemCount={itemCount}
                    itemSize={itemSize}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {Row}
                </List>
            )}
        </InfiniteLoader>
    );
};

import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: { azure: string };
        flex: { center: string };
        settings: { noneSelect: string };
    }
}

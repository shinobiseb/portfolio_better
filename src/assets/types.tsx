export interface ItemRefsType {
    [key: number]: HTMLAnchorElement | null;
}

export interface projectProps {
    title : string;
    tags: Array<string>;
    link: string;
    misc: boolean;
    desc?: string;
    dates?: string;
    img?: string;
}
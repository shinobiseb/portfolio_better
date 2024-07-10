export interface ProjectInfo {
    name: string;
    title: string;
    desc: string;
    link: string;
    notes: string[];
    img: string;
    tags: string[];
    misc: boolean;
}


export interface ItemRefsType {
    [key: number]: HTMLAnchorElement | null;
}

export interface projectProps {
    title : string;
    tags: Array<string>;
    misc: boolean
}

export interface ProjectInfoType {
    title: string;
    desc: string;
    link: string;
    notes: Array<string>;
    img: string;
    tags: Array<string>;
    show: boolean;
    setShow: any;
}
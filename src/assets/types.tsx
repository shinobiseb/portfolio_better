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

export interface IBullet {
    key: string,
    desc: string
}

export interface IExperience {
    subject : string,
    company : string,
    dateRange : string,
    bullets : IBullet[]
}
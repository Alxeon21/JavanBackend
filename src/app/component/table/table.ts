export interface header {
    key: string;
    subkey: string;
    name: string;
    dascription: string;
    sort: boolean;
    filter: boolean;
    click: boolean;
    type: string;
    set: any;
    class: string;    
};


export interface body {
    items: [];
    total_count: number;
};

export interface filter{
    var:string;
    val:string;
}

export interface dataChange {
    mode : string;
    change: string;
    data: any;
}

export interface onClickItem {
    mode : string;
    page : string;
    change: string;
    data: any;
}


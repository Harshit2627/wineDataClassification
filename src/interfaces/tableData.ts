export interface TableData {
    columns : Column[],
    data: any[]
}

interface Column {
    columnName: string;
    dataIndex: string;
}

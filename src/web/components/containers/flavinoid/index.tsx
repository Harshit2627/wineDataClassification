import DataTable from "../../stateless/dataTable/dataTable"
import rawData from "../../../../assets/Wine-Data.json"
import { getFlavanoidsCalucaltion } from "../../../utilities/helpers"

const FlavanoidDataTable = () => {
    const {columns, data} = getFlavanoidsCalucaltion(rawData)
    const source = {
        columns: columns,
        data: data
    }
    return(
        <DataTable columns={source?.columns} data={source.data}/>
    )
}

export default FlavanoidDataTable
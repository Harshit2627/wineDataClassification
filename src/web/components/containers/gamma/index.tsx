import DataTable from "../../stateless/dataTable/dataTable"
import rawData from "../../../../assets/data/Wine-Data.json"
import { gammaCalculation } from "../../../utilities/helpers"


const GammaDataTable = () => {
    const {columns, data} = gammaCalculation(rawData)
    const source = {
        columns: columns,
        data: data
    }
    return(
        <DataTable columns={source?.columns} data={source.data}/>
    )
}

export default GammaDataTable
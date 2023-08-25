export function getFlavanoidsCalucaltion (data: any[]) {
    let availableClasses = data?.map((element:any)=>element?.Alcohol)
    let uniqueClasses = Array.from(new Set(availableClasses))
    let columns = [{
        columnName: "Measure",
        dataIndex: "measure"
    }]
    let seperatedData:any = {}
    for (const el of uniqueClasses) {
        seperatedData[`${el}`] = data?.filter((element:any)=>element?.Alcohol === el)
        columns?.push({
            columnName: `Class ${el}`,
            dataIndex: `${el}`
        })
    }
    let finalData:any = []
    // finalData?.forEach((x:any)=>{
    //     if(x?.measure == "mean"){
    let temp ={measure: "Flavanoids Mean",}
    let temp2 = {measure: "Flavanoids Median"}
    let temp3 = {measure: "Flavanoids Mode"}
        Object?.keys(seperatedData)?.forEach((key)=>{         
             temp = {...temp, [key] : calculateMean(seperatedData[key]?.map((el:any)=>el?.Flavanoids))}   
             temp2 = {...temp2, [key]: median(seperatedData[key]?.map((el:any)=>el?.Flavanoids))} 
             temp3 = {...temp3, [key]: mode(seperatedData[key]?.map((el:any)=>el?.Flavanoids))}        
    })
    finalData = [temp, temp2, temp3]
return {
    columns,
    data: finalData
}

}

const calculateMean = (data: any[])=>{
    const { length } = data;
    let x = data.reduce((acc, val) => {
        return acc + (val/length);
     }, 0);
    return  Math.round((x + Number.EPSILON) * 100) / 100
}


const median = (arr: any) => {
    const { length } = arr;
    arr.sort((a: any, b: any) => a - b);
    if (length % 2 === 0) {
      return (arr[length / 2 - 1] + arr[length / 2]) / 2;
    }
    return Math.round((arr[(length - 1) / 2]+ Number.EPSILON) * 100) / 100;
}

const mode = (arr: any) => {
    const mode:any = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      const item:any = arr[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return Math.round((max+ Number.EPSILON) * 100) / 100;;
  };

export function gammaCalculation(data: any[]) {
    let availableClasses = data?.map((element:any)=>element?.Alcohol)
    let uniqueClasses = Array.from(new Set(availableClasses))
    let columns = [{
        columnName: "Measure",
        dataIndex: "measure"
    }]
    let seperatedData:any = {}
    for (const el of uniqueClasses) {
        seperatedData[`${el}`] = data?.filter((element:any)=>element?.Alcohol === el)
        columns?.push({
            columnName: `Class ${el}`,
            dataIndex: `${el}`
        })
    }
    let finalData:any = []
    // finalData?.forEach((x:any)=>{
    //     if(x?.measure == "mean"){
    let temp ={measure: "Gamma Mean",}
    let temp2 = {measure: "Gamma Median"}
    let temp3 = {measure: "Gamma Mode"}
        Object?.keys(seperatedData)?.forEach((key)=>{         
             temp = {...temp, [key] : calculateMean(getGammaValue(seperatedData[key]))}   
             temp2 = {...temp2, [key]: median(getGammaValue(seperatedData[key]))} 
             temp3 = {...temp3, [key]: mode(getGammaValue(seperatedData[key]))}        
    })

    finalData = [temp, temp2, temp3]
return {
    columns,
    data: finalData
}
}


const getGammaValue = (data: any[]) =>{
    let gammaValues:any[] = []

    data?.forEach((el:any)=>{
        let gm = (el?.Ash * el?.Hue)/el?.Magnesium 
        gammaValues.push(gm)
    })

    return gammaValues
}

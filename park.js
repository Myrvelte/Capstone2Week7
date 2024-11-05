document.addEventListener("DOMContentLoaded",()=>{
    const parkLocationSelect = document.getElementById("parkLocationSelect")
    const parkTypeSelect = document.getElementById("parkTypeSelect")
    const filterButton = document.getElementById("filterButton")
    const results = document.getElementById("results")

    parkTypesArray.forEach((type) => {
    const Option= document.createElement("option")    
    Option.value=type
    });
})
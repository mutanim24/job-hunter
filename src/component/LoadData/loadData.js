import { getShoppingCart } from "../../Utilities/fakeDB";

const loadApplied = async() =>{
    const loadData = await fetch("job-features.json")
    const data = await loadData.json();
    const allJobs = data.jobs                              
    // console.log(allJobs)
    const savedApplied = [];
    const storedApply = getShoppingCart();
    for(const id in storedApply){
        const addedAppliedJob = allJobs.find(job => job.id === id);
       savedApplied.push(addedAppliedJob)
    }
    return savedApplied;
}
// loadApplied();
export default loadApplied;
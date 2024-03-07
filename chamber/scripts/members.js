const url = "data/members.jason";
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory); // temporary testing of data retreival
  }
  
  getProphetData();
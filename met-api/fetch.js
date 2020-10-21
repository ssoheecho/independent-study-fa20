// function getDepartments() {
//   window
//   .fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
// }

// getDepartments()
// list of departments
// 0: {departmentId: 1, displayName: "American Decorative Arts"}
// 1: {departmentId: 3, displayName: "Ancient Near Eastern Art"}
// 2: {departmentId: 4, displayName: "Arms and Armor"}
// 3: {departmentId: 5, displayName: "Arts of Africa, Oceania, and the Americas"}
// 4: {departmentId: 6, displayName: "Asian Art"}
// 5: {departmentId: 7, displayName: "The Cloisters"}
// 6: {departmentId: 8, displayName: "The Costume Institute"}
// 7: {departmentId: 9, displayName: "Drawings and Prints"}
// 8: {departmentId: 10, displayName: "Egyptian Art"}
// 9: {departmentId: 11, displayName: "European Paintings"}
// 10: {departmentId: 12, displayName: "European Sculpture and Decorative Arts"}
// 11: {departmentId: 13, displayName: "Greek and Roman Art"}
// 12: {departmentId: 14, displayName: "Islamic Art"}
// 13: {departmentId: 15, displayName: "The Robert Lehman Collection"}
// 14: {departmentId: 16, displayName: "The Libraries"}
// 15: {departmentId: 17, displayName: "Medieval Art"}
// 16: {departmentId: 18, displayName: "Musical Instruments"}
// 17: {departmentId: 19, displayName: "Photographs"}
// 18: {departmentId: 21, displayName: "Modern Art"}

// need 12 (european sculpture & decorative arts), 13 (greek & roman)
// get all the image urls for objects that are classified as sculptures in 
// the european sculpture & decorative arts department and the ancient greek and roman art department from 
// the metropolitan museum of art

let objects = [];
let sculptures = [];
let urls = [];
let jsonString = '';

async function fetchObjects() {
  let response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=13');
  let data = await response.json();
  console.log(data);
  //let objectIds = await data.objectIDs.slice(0, 200);
  let objectIds = await data.objectIDs;

  for(const id of objectIds) {
    await new Promise(resolve => {
      setTimeout(resolve, 125)
    })

    let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    let data = await response.json();
    console.log(data)
    objects.push(data);

    if(data.classification.includes("Sculpture")) {
      sculptures.push(data)
    }
  }
 console.log(sculptures);
 getUrlrs(objects)
}

function getUrls(sculptures){
  sculptures.forEach(d => {
    if(data.primaryImage) {
      urls.push(data.primaryImage)
    }
    if(data.primaryImageSmall){
      urls.push(data.primaryImageSmall)
    }
    if(data.additionalImages.length > 0) {
      data.additionalImages.forEach(data => {
        urls.push(data);
      })
    }
  })

  console.log(urls);
  jsonString += JSON.stringify(urls);
}

fetchObjects();

const Students=[{id:41,Name:"joy"},
                {id:42,Name:"j"},
                {id:41,Name:"y"}
];

for (let i=0;i<Students.length;i++){
    let name=Students[i].Name;
    console.log(name);
}

const result=Students.map(name => name.Name);
console.log(result);

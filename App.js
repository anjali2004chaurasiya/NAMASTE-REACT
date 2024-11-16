const heading=React.createElement("h1",{
    id:"heading" ,xyz:"abc"}
,"Hello world from React");
            

const root=ReactDom.createRoot(document.getElementById("root"));
            root.render(heading);
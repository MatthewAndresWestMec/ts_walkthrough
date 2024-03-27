// intersectiontypes
type Draggable = {
    drag: () => void
}

type Resizable = {
    reSize: () => void
}

type UIwidget = Draggable & Resizable

let textBox:UIwidget = {
    drag:()=>{},
    reSize:()=>{}
}
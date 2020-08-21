import React from 'react'

const ROWS = 100

export default class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tick: null,
            sideLen: 10,
            cols: 10,
            lines: []
        }
        this.canvasRef = React.createRef()
        this.update = this.update.bind(this)
        this.fixCanvasDimensions = this.fixCanvasDimensions.bind(this)
    }
    render() {
        return (
            <canvas id = 'canvas' ref={this.canvasRef} className = 'bg-theme' />
        )
    }

    update() {
        this.fixCanvasDimensions()
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.state.lines.forEach(line => {
            line.update(this.state.cols)
            line.drawTo(ctx, this.state.sideLen, this.props.pageColor)
        })

    }

    makeLines() {
        const numLines = 10
        const lines = []
        for (let i = 0; i < numLines; i++) {
            let r = Math.floor(Math.random() * 1000)
            let c = Math.floor(Math.random() * 1000)
            lines.push(new Line(r, c))
        }
        this.setState({lines: lines})
    }

    componentDidMount(){
        this.fixCanvasDimensions()
        if (this.canvasRef.current.width > 600) {
            this.makeLines()
            const tick = setInterval(this.update, 50)
            this.setState({tick: tick})
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.tick)
        this.setState({tick: null})
    }

    fixCanvasDimensions() {
        const canvas = this.canvasRef.current
        if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientHeight
            let sideLen = Math.ceil(canvas.height / ROWS)
            this.setState({sideLen: sideLen, cols: Math.ceil(canvas.width / sideLen)})
        }
    }
}

function Line(r, c) {
    this.blocks = [[r, c]]
    this.tenCount = 0
    this.initLen = (Math.random() * 20) + 10
    this.dir = [0, 1]
    this.update = (cols) => {
        let head = this.blocks[this.blocks.length - 1]
        let nh = [(head[0] + this.dir[0] + ROWS) % ROWS, (head[1] + this.dir[1] + cols) % cols]
        this.blocks.push(nh)
        if (this.tenCount < this.initLen) {
            this.tenCount++
        } else {
            this.blocks.shift()
        }
    }
    this.drawTo = (ctx, side, col) => {
        this.blocks.forEach(([r, c], i) => {
            ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${(i / this.initLen)})`
            ctx.fillRect(c * side + (side / 4), r * side + (side / 4), side, side / 2)
        })
    }
}

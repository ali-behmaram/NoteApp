import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
        this.noteTitleHandler = this.noteTitleHandler.bind(this)
        this.inpuColorHandler = this.inpuColorHandler.bind(this)
        this.emptyHandler = this.emptyHandler.bind(this)
        this.addNotes = this.addNotes.bind(this)
        this.removeNoteHandler = this.removeNoteHandler.bind(this)

    }
    addNotes(note){
        let newNoteObject = {
            id: this.state.notes.length + 1,
            title: this.state.noteTitle,
            color: this.state.inputColor,
        }
        this.setState(prevState => {
            return{
                notes: [...prevState.notes, newNoteObject],
                noteTitle: '',
                inputColor: '',
            }
        })

    }

    noteTitleHandler(event){
        this.setState({
            noteTitle: event.target.value
        })
    }

    inpuColorHandler(color){
        this.setState({
            inputColor: color
        })
    }

    emptyHandler(){
        this.setState({
            inputColor: '',
            noteTitle: '',
        })
    }

    removeNoteHandler(noteId){
        let oldNotes = [...this.state.notes]
        let newNotes = oldNotes.filter(note => note.id !== noteId)

        this.setState({
            notes: newNotes,
        })
    }



    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper"> Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input value={this.state.noteTitle} onChange={this.noteTitleHandler} id="input-field" className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color => (
                                                 <ColorBox color={color} onColor={this.inpuColorHandler} />
                                            ))}



                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button onClick={this.addNotes} id="btn-save" type="button" className="btn btn-outline-info"  ><span className="fa fa-plus" ></span></button>
                                        <button onClick={this.emptyHandler} id="btn-delete" type="button" className="btn btn-outline-danger"  ><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map(note => (
                                                    <Note {...note} key={note.id} onRemove={this.removeNoteHandler} />
                                                ))}



                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}

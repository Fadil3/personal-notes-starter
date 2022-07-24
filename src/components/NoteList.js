import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  handleDelete(id) {
    return () => {
      this.props.deleteNote(id)
    }
  }

  handleArsip(id) {
    return () => {
      this.props.archiveNote(id)
    }
  }

  render() {
    return (
      <>
        <div className="w-full mx-auto flex flex-col gap-4 pt-5">
          <h2 className="text-left text-white text-2xl">Catatan Aktif</h2>
          <div className="flex flex-wrap md:mb-10">
            {this.props.notes.length > 0 ? (
              this.props.notes
                .filter((note) => !note.archived)
                .filter((note) =>
                  note.title
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase())
                )
                .map((note, index) => {
                  return (
                    <Note
                      data={note}
                      key={index}
                      handleArsip={this.handleArsip.bind(this)}
                      handleDelete={this.handleDelete.bind(this)}
                      isArsip={false}
                    />
                  )
                })
            ) : (
              <p className="text-white mb-5 text-xl text-center">
                Tidak ada data
              </p>
            )}
          </div>
        </div>
        <div className="w-full mx-auto flex flex-col gap-4 pt-5">
          <h2 className="text-left text-white text-2xl">Arsip</h2>
          <div className="flex flex-wrap md:mb-10">
            {this.props.notes.length > 0 ? (
              this.props.notes
                .filter((note) => note.archived)
                .filter((note) =>
                  note.title
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase())
                )
                .map((note, index) => {
                  return (
                    <Note
                      data={note}
                      key={index}
                      handleArsip={this.handleArsip.bind(this)}
                      handleDelete={this.handleDelete.bind(this)}
                      isArsip={true}
                    />
                  )
                })
            ) : (
              <p className="text-white mb-5 text-xl text-center">
                Tidak ada data
              </p>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default NoteList

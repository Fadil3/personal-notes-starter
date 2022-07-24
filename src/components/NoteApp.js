import React from 'react'
import Header from './Header'
import NoteBody from './NoteBody'
import NoteList from './NoteList'

class NoteApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Babel',
          body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
          archived: false,
          createdAt: '2022-04-14T04:27:34.572Z',
        },
        {
          id: 2,
          title: 'Functional Component',
          body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
          archived: false,
          createdAt: '2022-04-14T04:27:34.572Z',
        },
        {
          id: 3,
          title: 'Modularization',
          body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
          archived: false,
          createdAt: '2022-04-14T04:27:34.572Z',
        },
        {
          id: 4,
          title: 'Lifecycle',
          body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.',
          archived: false,
          createdAt: '2022-04-14T04:27:34.572Z',
        },
        {
          id: 5,
          title: 'ESM',
          body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
          archived: false,
          createdAt: '2022-04-14T04:27:34.572Z',
        },
        {
          id: 5,
          title: 'Module Bundler',
          body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
          archived: false,
          createdAt: '2022-04-14T04:27:34.572Z',
        },
      ],
      search: '',
    }
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    })
  }

  archiveNote(id) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived
        }
        return note
      }),
    })
  }

  searchNote(search) {
    this.setState({
      search: search.target.value,
    })
  }

  render() {
    return (
      <div className="bg-neutral-800 min-h-screen px-5 md:px-10">
        <Header handleSearch={this.searchNote.bind(this)} />
        <NoteBody addNote={this.addNote.bind(this)} />
        <NoteList
          search={this.state.search}
          notes={this.state.notes}
          addNote={this.addNote.bind(this)}
          deleteNote={this.deleteNote.bind(this)}
          archiveNote={this.archiveNote.bind(this)}
          searchNote={this.searchNote.bind(this)}
        />
      </div>
    )
  }
}

export default NoteApp

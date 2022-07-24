import React from 'react'

class NoteBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      remainingCharacters: 50,
    }
  }

  handleChange(event) {
    const { name, value } = event.target

    if (name === 'title') {
      this.setState({
        title: value,
        remainingCharacters: 50 - value.length,
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addNote({
      id: Date.now(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date(),
    })
    //reset form
    this.setState({
      title: '',
      body: '',
      remainingCharacters: 50,
    })
  }

  render() {
    return (
      <div className="w-full md:w-5/12 mx-auto flex flex-col gap-4 pt-5">
        <h2 className="text-left text-white text-2xl">Buat catatan</h2>
        <p className="text-white text-right">
          Sisa karakter {this.state.remainingCharacters}
        </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className="w-full rounded p-2"
            placeholder="Ini adalah judul..."
            name="title"
            maxLength={50}
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
            required
          />
          <textarea
            name="body"
            className="rounded p-2 w-full my-5"
            cols="30"
            rows="10"
            placeholder="Tuliskan catatanmu di sini..."
            value={this.state.body}
            onChange={this.handleChange.bind(this)}
            required
          ></textarea>
          <button
            className="w-full text-center text-white border py-2 font-bold transition-all duration-200 ease-in-out bg-neutral-800 active:scale-95 transition-transform transform rounded"
            type="submit"
          >
            Buat
          </button>
        </form>
      </div>
    )
  }
}

export default NoteBody

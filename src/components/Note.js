import React from 'react'
import { getData } from '../utils/data'

class Note extends React.Component {
  constructor(props) {
    super(props)
  }

  convertDate(date) {
    const d = new Date(date)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }
    const createdAt = d.toLocaleString('id-ID', options)
    return createdAt
  }

  render() {
    return (
      <div className="border border-white w-full md:w-[300px] rounded break-words m-2 h-full">
        <div className="px-4 py-2 ">
          <h2 className="text-white font-bold text-xl">
            {this.props.data.title}
          </h2>
          <p className="text-slate-500 font-semibold">
            {this.convertDate(this.props.data.createdAt)}
          </p>
          <p className="text-white text-left">{this.props.data.body}</p>
        </div>
        <div className="flex justify-between border rounded text-center bottom-0">
          <div
            className="w-1/2 border-r p-2 active:scale-95 transition-transform transform cursor-pointer"
            onClick={this.props.handleDelete(this.props.data.id).bind(this)}
          >
            <button className="text-red-600 font-semibold">Delete</button>
          </div>
          <div
            className="w-1/2 p-2 border-l active:scale-95 transition-transform transform cursor-pointer"
            onClick={this.props.handleArsip(this.props.data.id).bind(this)}
          >
            <button className="text-yellow-400 font-semibold">
              {this.props.isArsip ? 'Pindahkan' : 'Arsipkan'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Note

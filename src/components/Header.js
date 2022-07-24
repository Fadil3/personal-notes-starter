import React from 'react'

// header class component
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header className="flex justify-between items-center p-5 bg-neutral-800 border border-neutral-800 border-b-white">
        <h1 className="font-bold text-4xl text-white">Notes</h1>
        <input
          type="text"
          placeholder="Cari catatan...."
          className="py-2 pl-2 pr-20 rounded border focus:outline-none focus:border-white bg-neutral-800 caret-white text-white"
          onChange={this.props.handleSearch}
        />
      </header>
    )
  }
}

// export header class component
export default Header

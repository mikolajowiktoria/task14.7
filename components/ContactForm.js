var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <input type={'text'} placeholder={'Name'} value={'this.props.contact.firstName'}/>
        <input type={'text'} placeholder={'Last Name'} value={'this.props.contact.lastName'}/>
        <input type={'email'} placeholder={'Email'} value={'this.props.contact.email'}/>
      </form>
      <button className={'button'} type={'submit'}>
        Add a contact
      </button>
    )
  },
})
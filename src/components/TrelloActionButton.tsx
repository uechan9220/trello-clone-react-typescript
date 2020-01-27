import * as React from 'react'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Textarea from 'react-textarea-autosize'

class TrelloActionButton extends React.Component<{ list?: boolean }> {
  state = {
    formOpen: false,
    text: ''
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = (_e: any) => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = (e: { target: { value: any } }) => {
    this.setState({
      text: e.target.value
    })
  }

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'
    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? 'white' : 'inherit'
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit'

    return (
      <div
        /*
        this.openForm()だとclickした時になんの処理を呼ぶかの関数を引数にわたすから
        渡す段階で実行してしまうとrenderのたんびにclick時点の操作が走ってしまうのでthis.openForm
        */
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props

    const placeholder = list
      ? 'Enter list title...'
      : 'Enter a title for this card'

    const buttonTitle = list ? 'Add List' : 'Add Card'
    return (
      <div>
        <Card
          style={{
            overflow: 'visivle',
            minHeight: 80,
            minWidth: 272,
            padding: '6px 8px 2px',
            marginTop: 8
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none'
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{
              color: 'white',
              backgroundColor: '#5aac44'
            }}
          >
            {buttonTitle}{' '}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: 'pointer'
            }}
          >
            close
          </Icon>
        </div>
      </div>
    )
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
    marginTop: 8
  },
  formButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  }
}

export default TrelloActionButton

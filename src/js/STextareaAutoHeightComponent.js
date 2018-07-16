import __native from 'coffeekraken-sugar/js/core/sNativeWebComponent'

export default class Component extends __native(window.HTMLTextAreaElement) {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
    return {
    }
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    // listen for keydown event on the component
    this.addEventListener('keydown', this._onKeydown.bind(this))

    // set the height for the first time
    this.setTextareaHeight()
  }

  /**
   * On keydown
   * @param   {KeyboardEvent}    e    The keydown event
   */
  _onKeydown (e) {
    setTimeout(() => {
      this.setTextareaHeight()
    })
  }

  /**
   * Set the textarea height depending on the content
   */
  setTextareaHeight () {
    // disable all transition during the resize
    this.style.transition = 'none';

    // set the height to 1px
    // so we will have a scroll and we will be able to get
    // his height to apply as the component height
    this.style.height = '1px'

    // calculate the height to apply
    let height = this.scrollHeight + 2

    // apply the new height to the textarea
    this.style.height = `${height}px`

    // enable back the transitions
    setTimeout(() => {
      this.style.transition = '';
    })
  }
}

import {Component} from 'react'

import {
  Appcontainer,
  MemeGeneratorForm,
  MemeGenContainer,
  CustomableLabel,
  CustomInput,
  CustomSelect,
  MemContainer,
  FormAndMemeCont,
  Custombutton,
  Textt,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    textFont: '',
    backgroundImage: '',
    font: '',
  }

  onEnterUrl = event => {
    this.setState({url: event.target.value})
  }

  onEnterTopText = event => {
    this.setState({topText: event.target.value})
  }

  onEnterBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({textFont: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {url, topText, bottomText, textFont} = this.state

    this.setState({
      backgroundImage: url,
      topText,
      bottomText,
      font: textFont,
    })
  }

  rendermeme = () => {
    const {backgroundImage, topText, bottomText, font} = this.state
    return (
      <MemContainer data-testid="meme" backgroundImage={backgroundImage}>
        <Textt font={font}>{topText}</Textt>
        <Textt font={font}>{bottomText}</Textt>
      </MemContainer>
    )
  }

  render() {
    const {url, topText, bottomText, textFont} = this.state

    return (
      <Appcontainer>
        <MemeGenContainer>
          <h1>Meme Generator</h1>
          <FormAndMemeCont>
            {this.rendermeme()}
            <MemeGeneratorForm onSubmit={this.onSubmitForm}>
              <CustomableLabel htmlFor="image">Image URL</CustomableLabel>
              <CustomInput
                type="text"
                id="image"
                className="image"
                placeholder="Enter the Image Url"
                onChange={this.onEnterUrl}
                value={url}
              />
              <CustomableLabel htmlFor="front">Top Text</CustomableLabel>
              <CustomInput
                type="text"
                id="front"
                placeholder="Enter the Top Text"
                onChange={this.onEnterTopText}
                value={topText}
              />
              <CustomableLabel htmlFor="bottom">Bottom Text</CustomableLabel>
              <CustomInput
                type="text"
                id="bottom"
                placeholder="Enter the Bottom Text"
                onChange={this.onEnterBottomText}
                value={bottomText}
              />
              <CustomableLabel htmlFor="select">Font Size</CustomableLabel>
              <CustomSelect
                id="select"
                onChange={this.onChangeOptionId}
                value={textFont}
              >
                {fontSizesOptionsList.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </CustomSelect>
              <Custombutton type="submit">Generate</Custombutton>
            </MemeGeneratorForm>
          </FormAndMemeCont>
        </MemeGenContainer>
      </Appcontainer>
    )
  }
}

export default MemeGenerator

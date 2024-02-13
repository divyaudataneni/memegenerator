// Style your component
import styled from 'styled-components'

export const Appcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80vw;
  @media screen and (min-width: 768px) {
    min-width: 90vw;
    justify-content: space-between;
    align-items: center;
  }
`

export const FormAndMemeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 90vw;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    min-width: 60vw;
    justify-content: space-between;
  }
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomableLabel = styled.label`
  margin-top: 10px;
  margin-bottom: 8px;
  font-weight: bold;
  outline: none;
`

export const CustomInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: bold;
  outline: none;
`
export const CustomSelect = styled.select`
  padding: 10px;
  outline: none;
  margin-bottom: 10px;
`

export const MemContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  min-height: 40vh;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
  color: white;
  text-align: center;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 30vw;
    height: 50vh;
    margin-top: 5px;
    margin-left: 20px;
  }
`
export const Custombutton = styled.button`
  background-color: blue;
  padding: 10px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`
export const Textt = styled.p`
  font-size: ${props => props.font}px;
`

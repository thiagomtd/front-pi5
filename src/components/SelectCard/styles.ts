import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #edf2f4;
  padding: 1.5rem;
  border-radius: 0.5rem;
  min-height: 80vh;
  min-width: 80vw;
`
export const SelectImage = styled.img`
  max-width: 20rem;
`

export const SelectDivider = styled.span`
  margin: 0 3rem;
  border-left: 0.15rem solid #d8e2dc;
  min-height: 60vh;
`

export const SelectDivForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SelectDisplayQuantity = styled.h1`
  font-size: 1.5rem;
`

export const SelectDisplayPrice = styled.h1`
  font-size: 1.5rem;
`

export const SelectDisplayQuantityDiv = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

export const SelectDisplayQuantitybutton = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const SelectButtonImPlus = styled.button`
  background-color: #84dcc6;
  color: #0b090a;
  border-radius: 1rem;
  font-size: 3rem;
  border: none;
  min-height: 15vh;
  min-width: 12vw;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
`

export const SelectButtonImMinus = styled.button`
  background-color: #ff686b;
  color: #0b090a;
  border-radius: 1rem;
  font-size: 3rem;
  border: none;
  min-height: 15vh;
  min-width: 12vw;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
`

export const SelectButtonConfirm = styled.button`
  background-color: #84dcc6;
  color: #0b090a;
  border-radius: 1rem;
  font-size: 2rem;
  border: none;
  min-height: 5rem;
  min-width: 5rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
`

export const SelectButtonCancel = styled.button`
  background-color: #ff686b;
  color: #0b090a;
  border-radius: 1rem;
  font-size: 2rem;
  border: none;
  min-height: 5rem;
  min-width: 5rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
`

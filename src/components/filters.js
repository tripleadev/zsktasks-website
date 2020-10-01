import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 15px 0;
`

const Item = styled.div`
  display: inline-block;
  margin-right: 15px;
`

const Label = styled.label`
  font-weight: bold;
`

const Filters = ({
  germanGroup,
  setGermanGroup,
  overallGroup,
  setOverallGroup,
}) => {
  const onChange = e => {
    switch (e.target.name) {
      case "overall":
        setOverallGroup(e.target.value)
        break
      case "german":
        setGermanGroup(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <Wrapper>
      <Item>
        <Label htmlFor="overall">Grupa ogólna: </Label>
        <select
          id="overall"
          name="overall"
          onChange={onChange}
          value={overallGroup}
        >
          <option value="" />
          <option value="1">Grupa 1</option>
          <option value="2">Grupa 2</option>
        </select>
      </Item>
      <Item>
        <Label htmlFor="german">Grupa na J. Niemieckim: </Label>
        <select
          id="german"
          name="german"
          onChange={onChange}
          value={germanGroup}
        >
          <option value="" />
          <option value="1">Grupa 1 (prof. Mikołajczak)</option>
          <option value="2">Grupa 2 (prof. Tarabasz)</option>
        </select>
      </Item>
    </Wrapper>
  )
}

export default Filters

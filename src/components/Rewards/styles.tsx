import styled from "styled-components"

const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5em;
`

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  padding: 2em;
  width: 75%;
  border-radius: 1em;
  border-radius: 0.25em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  h2 {
    font-size: 35px;
    margin-bottom: 0.5em;
  }
  span {
    font-weight: bold;
    margin-bottom: 1em;
  }
`

const Coupons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1.5em;
  margin: 1em;
  div {
    display: flex;
    gap: 10px;
    width: 150px;
    flex-direction: column;
    align-items: center;
    border-radius: 1em;
    background: #4CAF50;
    color: whitesmoke;
    padding: 1em;
    border-radius: 0.25em;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-weight: bold;
    h3 {
      margin: 0;
      font-size: 20px;
    }
    span {
      font-size: 13px;
    }
  }
`

export { RewardsContainer, MemberCard, Coupons }
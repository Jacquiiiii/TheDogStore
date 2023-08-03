import { RewardsContainer, MemberCard, Coupons } from "./styles"

const Rewards = () => {
  return (
    <RewardsContainer>
      <MemberCard>
        <h2>Platinum Tier Member</h2>
        <span>⭐️ You have 69887 points ⭐️</span>
        <p>Click "Redeem" on one of the coupons below and the discount is automatically applied to your cart on checkout.</p>
      </MemberCard>
      <Coupons>
        <div>
          <h3>$5.00 off</h3>
          <span>500 points</span>
          <button>Redeem</button>
        </div>
        <div>
          <h3>$10.00 off</h3>
          <span>1000 points</span>
          <button>Redeem</button>
        </div>
        <div>
          <h3>$15.00 off</h3>
          <span>1500 points</span>
          <button>Redeem</button>
        </div>
        <div>
          <h3>$20.00 off</h3>
          <span>2000 points</span>
          <button>Redeem</button>
        </div>
        <div>
          <h3>$25.00 off</h3>
          <span>2500 points</span>
          <button>Redeem</button>
        </div>
      </Coupons>
    </RewardsContainer>
  )
}

export default Rewards
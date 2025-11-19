import WhiteCard from '../../assets/images/white-card.png';
import BlackCardBg from '../../assets/images/black-card-bg.png';
import BlackCardTop from '../../assets/images/black-card-top.png';
import BasicSkeletons from '../BasicSkeletons/BasicSkeletons';


const Wallet = (userInfo) => {
  return (
    <div>
      <BasicSkeletons width="300px" height="200px" />
      <div>Wallet</div>
      <div>
        <div>
          <img src={BlackCardBg}/>
          <img src={BlackCardTop}/>
          <div>{userInfo.financialWallet[cards].cardNumber}</div>
        </div>
        <div>
          <img src={WhiteCard}/>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
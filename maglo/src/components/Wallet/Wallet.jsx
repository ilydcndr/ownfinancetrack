import WhiteCard from '../../assets/images/white-card.png';
import BlackCardBg from '../../assets/images/black-card-bg.png';
import BlackCardTop from '../../assets/images/black-card-top.png';
import BasicSkeletons from '../BasicSkeletons/BasicSkeletons';
import { useAuth } from "../../context/AuthContext";
import './Wallet.scss'

const Wallet = () => {
  const { user } = useAuth();
  const cardNumber = user?.financialWallet[0]?.cards[0]?.cardNumber;

  return (
    <>
      {!user || user?.financialWallet.length === 0 ? (
        <BasicSkeletons
          items={[
            { width: "100%", height: "100%" }
          ]}
          height="100%"
          margin="25px 0"
        />
      ) : (
        <>
          <div className='wallet-title fw-semibold mb-2'>Wallet</div>
          <div className='wallet-content'>
            <img className='w-100' src={BlackCardBg} />
            <div className='wallet-info absolute'>
              <img className='w-100' src={BlackCardTop} />
              <div className='text-white mt-2 fw-bold'>{cardNumber}</div>
            </div>
            <div className='wallet-white-card d-flex justify-content-center'>
              <img src={WhiteCard} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Wallet;
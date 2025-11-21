import './Total.scss'
import summaryIconActive from '../../assets/logos/summary-icon-active.svg'
import summaryIcon from '../../assets/logos/summary-icon.svg'
import { formatUSD } from '../../utils/formatCurrency';

const TotalItem = ({ title, content, isActiveBox, onClick }) => {

    return (
        <div onClick={onClick} className={`col-4 d-flex total-box ${isActiveBox ? 'active' : ''}`}>
            <img src={isActiveBox ? summaryIconActive : summaryIcon} />
            <div className="total-info">
                <div className='total-title'>{title.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())}</div>
                <div className='total-content'>{formatUSD(content)}</div>
            </div>
        </div>
    );
};
export default TotalItem;
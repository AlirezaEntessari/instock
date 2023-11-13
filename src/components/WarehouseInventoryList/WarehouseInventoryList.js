import './WarehouseInventoryList.scss';
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function WarehouseInventoryList () {
	const [ whInventory, setWhInventory ] = useState(null);

    const { warehouseId } = useParams();
     
    useEffect(() => {
      const getWarehouse = async (warehouseId) => {
          try {
              const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}/inventories`);
              const data = response.data;
              setWhInventory(data);
              console.log(data);
          } catch (error) {
          console.log(error);
          }
      };
      getWarehouse(warehouseId);
	}, [warehouseId]);

	return (
		<div className='wh-invlist'>
			{whInventory &&
				whInventory.map(invItem => (
			<div key={invItem.id} className='wh-invlist__item'>
				<div className='wh-invlist__item__info-div'>
					<div className='wh-invlist__item__info-div__desc'>
						<h4>INVENTORY ITEM</h4>
						<div className='wh-invlist__item__info-div__desc__name'>
							<Link to={`/inventories/${invItem.id}`}><h2>{invItem.item_name}</h2></Link>
							<img src={arrow} alt='arrow' className="wh-invlist__item__info-div__desc__arrow"/>
						</div>
						<h4 className='wh-invlist__item__info-div__desc__category'>CATEGORY</h4>
						<h3>{invItem.category}</h3>
					</div>
					<div className='wh-invlist__item__info-div__status'>
						<h4 className='wh-invlist__item__info-div__status__stock'>STATUS</h4>
						<h2 className={'wh-invlist__item__info-div__status__stock' + (invItem.quantity > 0 ? '--green' : '--red')}>{invItem.status}</h2>
						<h4 className='wh-invlist__item__info-div__status__qty'>QTY</h4>
						<h3>{invItem.quantity}</h3>
					</div>
				</div>
				<div className='wh-invlist__item__actions-div'>
						<img src={del} alt="delete" className='shrink__hidden'/>
						<img src={edit} alt="edit" className='shrink2__hidden'/>
				</div>
			</div>
				))}
		</div>
	)
}
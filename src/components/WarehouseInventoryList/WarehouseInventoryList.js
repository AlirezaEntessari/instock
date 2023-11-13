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
          } catch (error) {
          console.log(error);
          }
      };
      getWarehouse(warehouseId);
	}, [warehouseId]);

	return (
		<div className='wh-invlist'>
			<div className='wh-invlist__tablet-labels'>
				<div className='wh-invlist__tablet-labels__div'>
					<h3>INVENTORY ITEM</h3>
					<img src="/static/media/sort-24px.68345a3668c9d04480bf63bf24daf75d.svg" alt="sort" className="wh-invlist__tablet-labels__sort"></img>
				</div>
				<div className='wh-invlist__tablet-labels__div'>
					<h3>CATEGORY</h3>
					<img src="/static/media/sort-24px.68345a3668c9d04480bf63bf24daf75d.svg" alt="sort" className="wh-invlist__tablet-labels__sort"></img>
				</div>
				<div className='wh-invlist__tablet-labels__div'>
					<h3>STATUS</h3>
					<img src="/static/media/sort-24px.68345a3668c9d04480bf63bf24daf75d.svg" alt="sort" className="wh-invlist__tablet-labels__sort"></img>
				</div>
				<div className='wh-invlist__tablet-labels__div'>
					<h3>QUANTITY</h3>
					<img src="/static/media/sort-24px.68345a3668c9d04480bf63bf24daf75d.svg" alt="sort" className="wh-invlist__tablet-labels__sort"></img>
				</div>
				<h3>ACTIONS</h3>
			</div>
			{whInventory &&
				whInventory.map(invItem => (
			<div key={invItem.id} className='wh-invlist__item'>
				<div className='wh-invlist__item__info-div'>
					<div className='wh-invlist__item__info-div__desc'>
						<h4 className='wh-invlist__item__label'>INVENTORY ITEM</h4>
						<div className='wh-invlist__item__info-div__desc__name'>
							<Link to={`/inventory/${invItem.id}`}><h2>{invItem.item_name}</h2></Link>
							<img src={arrow} alt='arrow' className="wh-invlist__item__info-div__desc__arrow"/>
						</div>
						<h4 className='wh-invlist__item__info-div__desc__category wh-invlist__item__label'>CATEGORY</h4>
						<h3>{invItem.category}</h3>
					</div>
					<div className='wh-invlist__item__info-div__status'>
						<h4 className='wh-invlist__item__info-div__status__stock wh-invlist__item__label'>STATUS</h4>
						<h2 className={'wh-invlist__item__info-div__status__stock' + (invItem.quantity > 0 ? '--green' : '--red')}>{invItem.status}</h2>
						<h4 className='wh-invlist__item__info-div__status__qty wh-invlist__item__label'>QTY</h4>
						<h3>{invItem.quantity}</h3>
					</div>
				</div>
				<div className='wh-invlist__item__actions-div'>
						<img className='wh-invlist__item__actions-div__action' src={del} alt="delete"/>
						<img src={edit} alt="edit" />
				</div>
			</div>
				))}
		</div>
	)
}
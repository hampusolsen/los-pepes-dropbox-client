import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useObservable, state$ } from '../../../utilities/store';
import ProfileMore from './ProfileMore';

export default function Profile() {
	const { profile } = useObservable(state$);
	const [ showMore, updateShowMore ] = useState(false);

	return (
		<div className='profile'>
			{profile.name ? (
				<React.Fragment>
					<div
						className='profile__sombrero'
						style={{
							backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Sombrero.png)`
						}}
					/>
					<div className='profile__info'>
						<div
							className='profile__userIconContainer'
							style={{
								backgroundImage: `url(${process.env
									.PUBLIC_URL}/assets/MexicanSkull.png)`
							}}
						/>
						<div className='profile__info__greeting'>
							<p className='profile__info__greeting__text'>
								Hola,{' '}
								{profile.name.given_name.length < 9 ? (
									profile.name.given_name
								) : (
									profile.name.abbreviated_name
								)}!
							</p>
							<button
								className='profile__info__moreButton'
								onClick={() => updateShowMore(!showMore)}
							>
								<ArrowDropDownIcon className='arrowDropDownIcon' />
							</button>
						</div>
					</div>
					{showMore ? <ProfileMore /> : null}
				</React.Fragment>
			) : null}
		</div>
	);
}

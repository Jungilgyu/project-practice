import { useState } from 'react';
import GroupDropdown from './GroupDropdown.jsx';
import MemberDropdown from './MemberDropdown.jsx';
import AlbumInput from './AlbumInput.jsx';
import { Button } from '../UI/Button.jsx';
import RadioButton from '../UI/RadioButton.jsx';

const Search = function () {
	const [userInput, setUserInput] = useState('');
	const [isClicked, setIsClicked] = useState(false);
	const [isExchange, setIsExchange] = useState(true);

	function onClick () {
		setIsClicked((prevIsClicked) => !prevIsClicked)
	}

	function onExchangeChange(value) {
		setIsExchange(value === 'option1');
	}

	return (
		<section id='user-input'>
			<div>
				<div>
					<RadioButton onChange={onExchangeChange} />
				</div>
				<h3>어떤 포카를 찾으시나요?</h3>
				<Button onClick={onClick}>상세검색</Button>
					{!isClicked ? <input /> : 
						<div>
							<div className='group'>
								<label>그룹명</label>
								<GroupDropdown />
							</div>
							<div>
								<td>
									<label>보유한 멤버</label>
									<MemberDropdown />
								</td>
								{isExchange && (
										<td>
										
											<label>찾는 멤버</label>
											<MemberDropdown />
										</td>
									)}
							</div>
							<div>
								<label>포토카드 종류</label>
								<AlbumInput />
							</div>
						</div>			
					}
				</div>
			<Button>확인</Button>
		</section>
	)
}

export default Search;
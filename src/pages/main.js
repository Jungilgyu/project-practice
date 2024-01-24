//메인페이지
import Search from '../components/Search/Search.jsx';
import { Link } from 'react-router-dom';

const main = () => {
	return (
		<div>
			<p>
				<p><Link to="/post-write">글쓰기~</Link></p>
				<p><Link to="/post-main">게시판으로 가기</Link></p>
			</p>
			<Search />
		</div>
	)
}

export default main;
import { useMemo } from "react";
import { useNavigate } from "react-router"

export default function ExploreNav({categoryKey, className,children}) {
	const navigate = useNavigate();

	const CATEGORY_MAP =useMemo(()=>({
		'sport' : '運動保健',
		'mind' : '心理成長',
		'skills' : '生活技能',
		'community' : '社區活動'
	}),[]);		
	
	function handleTabClick(categoryKey){
    navigate(`/explore-courses#${categoryKey}`);
  }

	return (
		<div 
		onClick={()=>handleTabClick(categoryKey)}
		className={className || ''}
		style={{cursor: 'pointer'}}
		>
			{/* 顯示傳入的子元素 */}
			{children}
		</div>
	)
}
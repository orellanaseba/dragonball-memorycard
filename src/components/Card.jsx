export const Card = ({data, handleClick}) => {


    return (
        <>
            { data ? (
                data.items.sort(() => Math.random() - 0.5).map(item => (
                    <div 
                    onClick={() => handleClick(item.id)} 
                    key={item.id} 
                    className="cursor-pointer flex justify-center items-center bg-orange-400 bg-opacity-75 min-h-52 w-52 rounded-xl mt-2">
                        <img className="min-w-[100px] h-[150px] object-contain" src={item.image} alt={item.name} />
                    </div>
                ))
            ) : null }
            
        </>
    )
}
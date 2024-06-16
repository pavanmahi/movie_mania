const APILINK="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3138cbdc0ea47398fa41b29ae9f47cf6&with_original_language=te&page=1";
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=3138cbdc0ea47398fa41b29ae9f47cf6&query=";
const IMGPATH="https://image.tmdb.org/t/p/w1280";

const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url){
	fetch(url).then(res=>res.json())
	.then(function(data){
		console.log(data.results);
		const div_row=document.createElement("div");
		div_row.setAttribute("class", "row");
		data.results.forEach(element => {
			const div_card=document.createElement("div");
			div_card.setAttribute("class", "card");
			const div_column=document.createElement("div");
			div_column.setAttribute("class", "column");;
			const image=document.createElement("img");
			image.setAttribute("class","thumbnail");
			image.setAttribute("id","image")
			const title=document.createElement("h3");
			title.setAttribute("id","title");

			title.innerHTML=`${element.title}`;
			image.src=IMGPATH+element.poster_path;

			div_card.appendChild(image);
			div_card.appendChild(title);
			div_column.appendChild(div_card);
			div_row.appendChild(div_column);
		}); 
		main.appendChild(div_row);
	});
}

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	main.innerHTML="";
    const searchTerm=search.value;

	if(searchTerm){
		returnMovies(SEARCHAPI + searchTerm);
		search.value="";
	}
});

import './sources.css';
import Source from './source.interface';
class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: Source): void  => {
            const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
            
        });

        const sources = document.querySelector('.sources')
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;

import Icon from "./Icon";
export interface CreateIconProps {
    scriptUrl: string
}
const setMap = new Set()
const CreateIcon = (scriptUrl: string) => {
    if (!setMap.has(scriptUrl)) {
        const svgDom = document.createElement('script')
        svgDom.setAttribute('src', scriptUrl)
        document.body.appendChild(svgDom);
        setMap.add(scriptUrl)
    }
    return Icon
}

export default CreateIcon;
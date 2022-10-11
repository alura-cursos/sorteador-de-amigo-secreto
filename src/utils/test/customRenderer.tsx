import { render, RenderOptions } from "@testing-library/react"
import { ReactElement } from "react"
import { RecoilRoot } from "recoil"

const customRenderer = (ui: ReactElement, options?: RenderOptions | undefined) => {
  const renderWrapper = ({ children }:{children: ReactElement}) => (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )

  return render(ui, { wrapper: renderWrapper, ...options })
}

export { customRenderer as render }
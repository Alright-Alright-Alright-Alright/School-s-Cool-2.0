import React from "react"
import Main from "../../layout/main"
import DashCardsLeft from "./DashCardsLeft"
import DashCardsRight from "./DashCardsRight"

const mainContent = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui mi,
    auctor ac nisi vel, interdum iaculis elit. Vivamus elit dui, tincidunt
    commodo ultrices non, tempus ut felis. Maecenas a sagittis urna, sed cursus
    erat. Aliquam erat volutpat. In nec dui nec mauris maximus varius.
    Suspendisse pellentesque suscipit ante sit amet posuere. Aliquam posuere
    venenatis tempor. Morbi eu arcu at diam gravida rutrum. Nullam tempus diam
    quis libero viverra venenatis. Aliquam nec accumsan dolor. Nullam in ornare
    mi, ut dignissim nunc. Nulla bibendum vestibulum lectus, et ornare turpis
    pulvinar sed. Nullam auctor pharetra aliquam. Vestibulum nec blandit est.
    Proin massa enim, placerat et gravida nec, mollis a libero. Donec lobortis
    ligula diam, eget pulvinar mauris semper et. Nam sit amet fermentum sem.
    Praesent scelerisque volutpat libero. Pellentesque vitae lorem vel dui
    aliquet euismod eget eu nisi. Etiam nibh ante, dictum ac congue at,
    tincidunt in sem. Vestibulum gravida a diam nec pretium. Proin vel sapien
    bibendum, venenatis diam et, rhoncus tortor. Donec scelerisque tincidunt
    orci, vitae sodales tellus euismod ac. Nunc at consequat quam. Mauris
    sollicitudin sagittis velit, ut blandit nulla consectetur quis. Praesent
    pellentesque lacus a mi blandit efficitur. Aenean aliquet sodales mauris, ut
    egestas odio molestie vel. Sed lacinia tortor sit amet neque aliquam, ac
    cursus ex dictum. Nulla facilisi. Maecenas tincidunt bibendum porta. Nullam
    ante nibh, molestie vel arcu vitae, elementum mattis nisl. Orci varius
    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Donec et orci ac massa molestie pretium a vel tortor. Nullam gravida mauris
    at turpis pretium rhoncus. Donec fermentum tellus id neque tristique, sit
    amet viverra lacus dapibus. Nunc eget dictum dolor. Quisque sagittis nisl
    non eros fringilla, quis convallis ante viverra. Aliquam non elit sit amet
    velit mattis aliquet finibus vitae nulla. Vestibulum mollis nunc vel nulla
    euismod aliquam. Proin lorem mi, scelerisque ut neque in, gravida cursus
    ante. In sed enim non lectus semper pellentesque in id tellus. Etiam
    aliquet, erat vitae pretium placerat, arcu orci ultrices magna, in vehicula
    neque nibh eget leo. Proin imperdiet nibh et interdum malesuada. Suspendisse
    massa odio, pharetra a condimentum at, faucibus ullamcorper risus. Etiam ut
    dapibus ipsum. In magna mauris, tempor ut finibus et, egestas non augue.
    Phasellus commodo, ante vel congue sodales, nibh purus viverra lectus, id
    ullamcorper lorem tortor sit amet ligula. Donec ac venenatis massa, vel
    placerat mi. Nullam hendrerit at tellus sed convallis. Integer pulvinar urna
    nec ante lacinia interdum. Donec lobortis magna non nisl rhoncus viverra.
    Praesent ante urna, tincidunt non pellentesque eget, pulvinar sed arcu.
    Curabitur quis nunc consequat, vehicula elit quis, fermentum lorem. Nullam
    gravida sed orci ut vehicula. Orci varius natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Fusce mollis enim sodales sapien
    venenatis rhoncus eget quis lorem. Vivamus vulputate, turpis vitae imperdiet
    semper, ex ipsum vulputate leo, posuere fringilla turpis augue at nulla.
    Donec arcu tellus, congue ac neque id, elementum maximus erat. Class aptent
    taciti sociosqu ad litora torquent per conubia nostra, per inceptos
    himenaeos. Orci varius natoque penatibus et magnis dis parturient montes,
    nascetur ridiculus mus. Praesent tincidunt, leo eget rutrum mollis, justo
    purus faucibus sem, at rhoncus sem ex in tortor. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit
    amet tellus lacus. Nam eget sodales mauris. Nullam quis ante est. Duis
    luctus, quam non egestas fermentum, ligula velit dictum diam, a luctus dolor
    nunc ac elit.
  </p>
)

function index() {
  return (
    <>
      <Main
        main={mainContent}
        contentLeft={<DashCardsLeft />}
        contentRight={<DashCardsRight />}
      />
    </>
  )
}

export default index

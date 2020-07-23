import React from 'react';
import { Nav, Sidenav, Icon } from 'rsuite';
const Sidebar = () => {
  return (
    <div>
      <div style={{ width: 250 }}>
        <Sidenav
          expanded={false}
          defaultOpenKeys={['3', '4']}
          // activeKey={this.state.activeKey}
          // onSelect={this.handleSelect}
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                User Group
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState, Fragment } from "react";
import { Row, Col, Container } from "reactstrap";

import Element from "../../ui/Element";
import Insert from "./Insert";
import Delete from "./Delete";
import Update from "./Update";
import Search from "./Search";


export default function LinkedList() {
  let [head, setHead] = useState(null);
  let [list, setList] = useState(null);
  let [rendered, setRendered] = useState(false);

  // clear function --------------------------------------------
  let clear = () => {
    let curr = head;
    while (curr) {
      curr.highlight = false;
      curr = curr.next;
    }
    setHead(head);
  };
  // insert--------------------------------------------------------
  let insert = (data, where) => {
    if (data) {
      clear();
      let newNode = { info: data, next: null, highlight: false },
        curr;
      if (!head) {
        setHead({ ...newNode });
      } else {
        switch (where.toLowerCase()) {
          case "start":
            newNode.next = head;
            setHead({ ...newNode });
            break;
          case "end":
          default:
            curr = head;
            while (curr.next) {
              curr = curr.next;
            }
            curr.next = newNode;
            setHead({ ...head });
        }
      }
      setRendered(false);
    } else {
      alert("Empty Insert");
    }
  };
  //----------Using "delet1" instead of delete is some keyword
  let del = (data, where, position) => {
    if (head) {
      console.log("Original : ", head);
      clear();
      if (data) {
        let head1 = head,curr;
        while (head1 && head1.info == data) {
          head1 = head1.next;
          curr = head1;
        }
        while (curr && curr.next) {
          if (curr.next.info == data) {
            curr.next = curr.next.next;
          }
          curr = curr.next;
        }
        setHead(head1);
      } else if (position) {
        if (position === 0) {
          head = head.next;
        } else {
          let curr = head;
          while (--position > 0 && curr) {
            curr = curr.next;
          }
          if (curr && curr.next) {
            curr.next = curr.next.next;
          } else {
            alert("No element to delete");
          }
        }
        setHead(head);
      } else {
        switch (where) {
          case "start":
            head = head.next;
            break;
          case "end":
            let curr = head;
            while (curr && curr.next && curr.next.next) {
              curr = curr.next;
            }
            if (curr && curr.next) {
              curr.next = curr.next.next;
            }
            break;
          default:
        }
        console.log("Updated : ", head);
        setHead(head);
      }
      setRendered(false);
    } else {
      alert("List is empty");
    }
  };
  //Update------------------------------------------------------
  let update = (position, value) => {
    if (position && value && parseInt(position) >= 0) {
      clear();
      let head1 = head,
        curr = head;
      while (curr && --position >= 0) {
        curr = curr.next;
      }
      if (curr) {
        curr.info = value;
        curr.highlight = true;
        setHead(head1);
        setRendered(false);
      } else {
        alert("Position out of bounds");
      }
    } else {
      alert("Cannot update");
    }
  };

  // Seacrh----------------------------------------------------

  let search = data => {
    if (data) {
      clear();
      let head1 = head,
        curr = head;
      while (curr) {
        if (curr.info == data) {
          curr.highlight = true;
        }
        curr = curr.next;
      }
      setHead(head1);
      setRendered(false);
    } else {
      alert("Empty Search");
    }
  };

  let renderList = ()=>{
    let list = [];
    if (head) {
      let curr = head,
        key = 0;
      while (curr) {
        if (curr.next) {
          list.push(
            <Fragment key={key + "-" + curr.info}>
              <Element
                data={{ value: curr.info }}
                type="LinkedList"
                next={true}
                highlight={curr.highlight}
              />
            </Fragment>
          );
        } else {
          list.push(
            <Fragment key={key + "-" + curr.info}>
              <Element
                data={{ value: curr.info }}
                type="LinkedList"
                next={false}
                highlight={curr.highlight}
              />
            </Fragment>
          );
        }
        curr = curr.next;
        key++;
      }
    }  
    setList(list);
    setRendered(true);
  }

  //-----------------content of render function ------------------------------------
  React.useEffect(()=>{
    if(!rendered)
      renderList();
  });
  
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <Insert
            insert={(data, where) => {
              insert(data, where);
            }}
          />
        </Col>
        <Col sm={3}>
          <Delete
            del={(data, where, position) => {
              del(data, where, position);
            }}
          />
        </Col>
        <Col sm={3}>
          <Update
            update={(position, value) => {
              update(position, value);
            }}
          />
        </Col>
        <Col sm={2}>
          <Search
            search={data => {
              search(data);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-4 mb-4">{list}</Row>
    </Container>
  );
}

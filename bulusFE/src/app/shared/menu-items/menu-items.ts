import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

let MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'home',
        short_label: 'H',
        name: 'Home Community',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-dashboard'
      },
      {
        state: 'wallet',
        short_label: 'W',
        name: 'Wallet',
        type: 'link',
        icon: 'ti-wallet'
      },
      {
        state: 'affiliate',
        short_label: 'A',
        name: 'Affiliate',
        type: 'link',
        icon: 'ti-layout-list-thumb'
      },
      {
        state: 'redeemgold',
        short_label: 'R',
        name: 'Gold Saving Account',
        type: 'link',
        icon: 'ti-server'
      },
      {
        state: 'profile',
        short_label: 'P',
        name: 'Profile',
        type: 'link',
        icon: 'ti-user'
      },
      // {
      //   state: 'reward',
      //   short_label: 'R',
      //   name: 'Reward',
      //   type: 'link',
      //   icon: 'ti-medall'
      // },
      {
        state: 'luckydraw',
        short_label: 'L',
        name: 'Lucky Strike',
        type: 'link',
        icon: 'ti-gift'
      },
      // {
      //   state: 'withdrawal',
      //   short_label: 'W',
      //   name: 'Balance Withdrawal',
      //   type: 'sub',
      //   icon: 'ti-credit-card',
      //   children: [
      //     {
      //       state: 'withdraw',
      //       name: 'Withdraw'
      //     }, {
      //       state: 'withdrawhistory',
      //       name: 'History'
      //     },
      //   ]
      // },
      // {
      //   state: 'gold',
      //   short_label: 'G',
      //   name: 'Redeem Gold',
      //   type: 'sub',
      //   icon: 'ti-gift',
      //   children: [
      //     {
      //       state: 'claimgold',
      //       name: 'Redeem Your Gold'
      //     }, {
      //       state: 'refundgold',
      //       name: 'Refund Your Gold'
      //     }, {
      //       state: 'claimgoldhistory',
      //       name: 'History'
      //     },
      //   ]
      // },
      {
        state: 'shopping',
        short_label: 'S',
        name: 'Shopping',
        type: 'link',
        icon: 'ti-shopping-cart',
        badge: [
          {
            type: 'warning',
            value: 'COMING SOON'
          }
        ]
      },
      {
        state: 'charity',
        short_label: 'C',
        name: 'Charity',
        type: 'link',
        icon: 'ti-heart',
        badge: [
          {
            type: 'warning',
            value: 'COMING SOON'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }


  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
